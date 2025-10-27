import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const server = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

export default async (req: Request) => {
  try {
    if (req.method !== "POST")
      return new Response("Method not allowed", { status: 405 });

    const body = await req.json();
    const { action, token, data } = body;

    if (!token)
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });

    // Prüfe Token in admins-Tabelle
    const { data: admin, error: adminErr } = await server
      .from("admins")
      .select("*")
      .eq("token", token)
      .limit(1)
      .maybeSingle();

    if (adminErr || !admin) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    if (action === "create") {
      const { category, date, title, content } = data;
      const { data: inserted, error } = await server
        .from("news_items")
        .insert([{ category, date, title, content }])
        .select()
        .single();

      if (error)
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
        });
      return new Response(JSON.stringify({ success: true, item: inserted }), {
        status: 200,
      });
    }

    if (action === "update") {
      const { id, category, date, title, content } = data;
      const { data: updated, error } = await server
        .from("news_items")
        .update({ category, date, title, content })
        .eq("id", id)
        .select()
        .single();

      if (error)
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
        });
      return new Response(JSON.stringify({ success: true, item: updated }), {
        status: 200,
      });
    }

    if (action === "delete") {
      const { id } = data;
      const { error } = await server.from("news_items").delete().eq("id", id);
      if (error)
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
        });
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    return new Response(JSON.stringify({ error: "Unknown action" }), {
      status: 400,
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || "Server error" }),
      { status: 500 }
    );
  }
};
