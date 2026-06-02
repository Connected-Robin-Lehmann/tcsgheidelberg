import React, { useState } from "react";

interface SupportCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  href: string;
  contactLabel?: string;
  contactName?: string;
  contactEmail?: string;
  readMoreLabel: string;
  readLessLabel: string;
  truncateAt?: number;
}

const SupportCard: React.FC<SupportCardProps> = ({
  icon,
  title,
  description,
  action,
  href,
  contactLabel,
  contactName,
  contactEmail,
  readMoreLabel,
  readLessLabel,
  truncateAt = 180,
}) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = description.length > truncateAt;
  const shown =
    !isLong || expanded
      ? description
      : description.slice(0, truncateAt).trimEnd() + "…";

  return (
    <div className="bg-white rounded-2xl shadow-lg border-4 border-tennis-yellow/20 p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-tennis-black mb-4 text-center">
        {title}
      </h3>
      <div className="mb-6 flex-grow">
        <p className="text-gray-700 leading-relaxed">
          {shown}
          {isLong && (
            <>
              {" "}
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="text-tennis-black font-semibold underline hover:text-tennis-yellow transition-colors"
              >
                {expanded ? readLessLabel : readMoreLabel}
              </button>
            </>
          )}
        </p>
      </div>
      <div className="text-center mt-auto">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-tennis-yellow text-tennis-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
        >
          {action}
        </a>
        {contactName && contactEmail && (
          <p className="text-sm text-gray-600 mt-4">
            {contactLabel}{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="font-semibold text-tennis-black hover:text-tennis-yellow underline"
            >
              {contactName}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default SupportCard;