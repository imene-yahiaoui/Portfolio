import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.css";

const ArticleDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentLanguage = i18n.language || "fr";

  const goBack = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate("/solotion");
    }
  };

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const articles = require.context(
          "../../assets/articles/",
          true,
          /\.json$/
        );

        const allPosts = articles.keys().map((filePath) => {
          const post = articles(filePath);
          if (
            post &&
            typeof post === "object" &&
            "id" in post &&
            "title" in post &&
            "content" in post &&
            "image" in post
          ) {
            return { ...post, filePath };
          }
          return null;
        });

        const validPosts = allPosts.filter((post) => post !== null);

        const selectedArticle = validPosts.find(
          (post) =>
            post.id === parseInt(id, 10) &&
            post.filePath.includes(`/${currentLanguage}/`)
        );

        if (!selectedArticle) {
          setArticle(null);
          setRelatedArticles([]);
        } else {
          setArticle(selectedArticle);
          const otherArticles = validPosts.filter(
            (post) =>
              post.id !== parseInt(id, 10) &&
              post.filePath.includes(`/${currentLanguage}/`)
          );
          setRelatedArticles(
            otherArticles.sort(() => Math.random() - 0.5).slice(0, 3)
          );
        }
      } catch (error) {
        console.error("Erreur lors du chargement de l'article :", error);
        setArticle(null);
        setRelatedArticles([]);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id, currentLanguage]);

  useEffect(() => {
    if (article) {
      document.title = article.title;
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", article.content.slice(0, 160));
      }
    }
  }, [article]);

  if (loading) {
    return <div className="spinner">{t("article.loading")}</div>;
  }

  if (!article) {
    return (
      <div className="no-article">
        <p>{t("article.notFound")}</p>
        <button onClick={() => navigate("/Solution")}>
          {t("article.goBack")}
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
        className="article-detail"
      >
        <button className="back-button" onClick={goBack}>
          ← {t("article.back")}
        </button>
        <h1 className="article-title">{article.title}</h1>
        <img
          src={`/assets/images/articles/${article.image}`}
          alt={article.title}
          className="article-image"
        />
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      <div className="article-detail">
        <h2>{t("article.readMore")}</h2>
        <div className="related-articles-list">
          {relatedArticles.length > 0 ? (
            relatedArticles.map((related) => (
              <div
                key={related.id}
                className="related-article-card"
                onClick={() => navigate(`/article/${related.id}`)}
              >
                <img
                  src={`/assets/images/articles/${related.image}`}
                  alt={related.title}
                  className="related-article-image"
                />
                <h3 className="related-article-title">{related.title}</h3>
              </div>
            ))
          ) : (
            <p>{t("article.noFounMore")}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
