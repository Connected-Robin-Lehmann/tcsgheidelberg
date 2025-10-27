import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { action, token, newsItem, newsId, files } = await req.json();

    // Verify token (similar to manage-modal)
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    switch (action) {
      case "create":
        if (!newsItem) {
          return new Response(
            JSON.stringify({ error: "News item data is required" }),
            {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
          );
        }

        const { data: createdItem, error: createError } = await supabase
          .from("news_items")
          .insert(newsItem)
          .select()
          .single();

        if (createError) throw createError;

        // Upload files if provided
        if (files && files.length > 0) {
          for (const file of files) {
            // Convert base64 back to binary
            const base64Data = file.base64.split(',')[1];
            const binaryData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
            
            // Create unique filename
            const fileExt = file.name.split('.').pop();
            const fileName = `${createdItem.id}/${crypto.randomUUID()}.${fileExt}`;
            
            // Upload to storage
            const { error: uploadError } = await supabase.storage
              .from('news-media')
              .upload(fileName, binaryData, {
                contentType: file.type,
                upsert: false
              });
            
            if (uploadError) throw uploadError;
            
            // Create media record
            const { error: mediaError } = await supabase
              .from('news_media')
              .insert({
                news_item_id: createdItem.id,
                file_path: fileName,
                file_type: file.type
              });
            
            if (mediaError) throw mediaError;
          }
        }

        return new Response(
          JSON.stringify({ success: true, data: createdItem }),
          {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );

      case "update":
        if (!newsId || !newsItem) {
          return new Response(
            JSON.stringify({ error: "News ID and updated data are required" }),
            {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
          );
        }

        const { data: updatedItem, error: updateError } = await supabase
          .from("news_items")
          .update(newsItem)
          .eq("id", newsId)
          .select()
          .single();

        if (updateError) throw updateError;

        // Upload files if provided
        if (files && files.length > 0) {
          for (const file of files) {
            // Convert base64 back to binary
            const base64Data = file.base64.split(',')[1];
            const binaryData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
            
            // Create unique filename
            const fileExt = file.name.split('.').pop();
            const fileName = `${newsId}/${crypto.randomUUID()}.${fileExt}`;
            
            // Upload to storage
            const { error: uploadError } = await supabase.storage
              .from('news-media')
              .upload(fileName, binaryData, {
                contentType: file.type,
                upsert: false
              });
            
            if (uploadError) throw uploadError;
            
            // Create media record
            const { error: mediaError } = await supabase
              .from('news_media')
              .insert({
                news_item_id: newsId,
                file_path: fileName,
                file_type: file.type
              });
            
            if (mediaError) throw mediaError;
          }
        }

        return new Response(
          JSON.stringify({ success: true, data: updatedItem }),
          {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );

      case "delete":
        if (!newsId) {
          return new Response(
            JSON.stringify({ error: "News ID is required" }),
            {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
          );
        }

        // First delete all media files from storage
        const { data: mediaFiles } = await supabase
          .from("news_media")
          .select("file_path")
          .eq("news_item_id", newsId);

        if (mediaFiles && mediaFiles.length > 0) {
          const filePaths = mediaFiles.map(m => m.file_path);
          await supabase.storage
            .from("news-media")
            .remove(filePaths);
        }

        // Delete media records
        await supabase
          .from("news_media")
          .delete()
          .eq("news_item_id", newsId);

        // Delete news item
        const { error: deleteError } = await supabase
          .from("news_items")
          .delete()
          .eq("id", newsId);

        if (deleteError) throw deleteError;

        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });

      default:
        return new Response(JSON.stringify({ error: "Invalid action" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An error occurred";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
