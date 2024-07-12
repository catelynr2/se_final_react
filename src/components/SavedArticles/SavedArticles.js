import React, { useContext, useState } from "react";
import Navbar from "../Navigation/Navbar";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";
import { articleContext } from "../../contexts/ArticleProvider";
import Footer from "../Footer/Footer";
import "../SavedNewsCardList/SavedNewsCardList.css";

export default function SavedArticles() {
  const [signedIn, setSignedIn] = useState(true);
  const { savedArticles } = useContext(articleContext);
  const hasSavedArticles = savedArticles.some(
    (articleGroup) => articleGroup.articles.length > 0
  );

  return (
    <>
      <Navbar signedIn={signedIn} setSignedIn={setSignedIn} theme={"light"} />
      <SavedNewsHeader articles={savedArticles} />
      <div
        className={hasSavedArticles ? "savedlist" : "savedlist__empty"}
      ></div>
      {hasSavedArticles && <SavedNewsCardList cards={savedArticles} />}
      <Footer />
    </>
  );
}

// need a <ProtectedRoute path="/profile" loggedIn={loggedIn}></ProtectedRoute> around this component??
