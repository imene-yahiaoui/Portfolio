import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.css";

const Solution = () => {
  const { i18n, t } = useTranslation();
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const currentLanguage = i18n.language || "fr";
  const lang = localStorage.getItem("i18nextLng");

  useEffect(() => {
    const loadArticles = () => {
      try {
        // Charger les fichiers JSON dynamiquement pour la langue courante
        const requireArticles = require.context(
          "../../assets/articles/",
          true,
          /\.json$/
        );
        const loadedArticles = requireArticles
          .keys()
          .map((filePath) => {
            const article = requireArticles(filePath);
            if (filePath.includes(`/${currentLanguage}/`)) {
              return { ...article, filePath };
            }
            return null;
          })
          .filter((article) => article !== null);

        setArticles(loadedArticles);
      } catch (error) {
        console.error(
          "Erreur lors du chargement des articles :",
          error.message
        );
        setArticles([]);
      }
    };

    loadArticles();
  }, [currentLanguage]);

  const openArticle = (id) => navigate(`/article/${id}`);

  return (
    <div className="blog-page">
      {articles.length > 0 ? (
        <div
          style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
          className="blog-posts"
        >
          {articles.map((article) => (
            <div
              key={article.id}
              className="blog-post-card"
              onClick={() => openArticle(article.id)}
            >
              {article.image && (
                <img
                  src={`assets/images/articles/${article.image}`}
                  alt={article.title}
                  className="post-image"
                />
              )}
              <section className="blog-section">
                <h3 className="post-title">{article.title}</h3>
                <p className="post-excerpt">{article.excerpt}</p>
                <button
                  className="glow-on-hover"
                  onClick={(e) => {
                    e.stopPropagation();
                    openArticle(article.id);
                  }}
                >
                  {t("solution.readMore")}
                </button>
              </section>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-posts-message">{t("solution.nonFound")}</p>
      )}
    </div>
  );
};

export default Solution;
