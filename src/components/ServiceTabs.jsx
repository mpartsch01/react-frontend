import React, { useEffect, useState } from "react";
import "../ServiceTabs.css";

const GRAPHQL_ENDPOINT =
    "https://wordpress-321502-6040557.cloudwaysapps.com/graphql";

const GET_SERVICE_CATEGORIES = `
  query GetCategories {
    serviceCategories {
      nodes {
        id
        name
        description
        serviceCategoryFields {
          categoryColor
          categoryIcon {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export default function ServiceTabs() {
    const [serviceCategories, setServiceCategories] = useState([]);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(GRAPHQL_ENDPOINT, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ query: GET_SERVICE_CATEGORIES })
                });

                const json = await res.json();
                console.log("WP DATA:", json);

                const cats = json?.data?.serviceCategories?.nodes || [];
                setServiceCategories(cats);

                if (cats.length > 0) {
                    setActiveTab(cats[0].id);
                }
            } catch (err) {
                console.error("GraphQL error:", err);
            }
        }

        fetchData();
    }, []);

    const activeCategory =
        serviceCategories.find((c) => c.id === activeTab) || null;

    return (
        <div className="serviceTabs-wrapper">
            {/* PILL BAR WITH ICONS */}
            <div className="tab-pill-group">
                {serviceCategories.map((cat) => {
                    const iconUrl =
                        cat?.serviceCategoryFields?.categoryIcon?.node?.sourceUrl || null;

                    return (
                        <button
                            key={cat.id}
                            className={`tab-button ${
                                activeTab === cat.id ? "active" : ""
                            }`}
                            onClick={() => setActiveTab(cat.id)}
                        >
                            {iconUrl && (
                                <img
                                    src={iconUrl}
                                    className="tab-icon"
                                    alt={`${cat.name} icon`}
                                />
                            )}
                            {cat.name}
                        </button>
                    );
                })}
            </div>

            {/* We are NOT rendering extra text here on purpose
          The hero card on the right handles the content visually.
          So we leave out the <h2>Experience</h2> that was showing under the pill. */}
        </div>
    );
}
