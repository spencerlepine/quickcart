import React from "react";
import { Link } from "react-router-dom"
import { HOME } from "../../constants/routeConstants"

function MissingPage() {
  return (
    <div>
        <p>Zoinkers! This page doesn't exist :(</p> 
        <Link to={HOME}>
          Homepage
        </Link>
    </div>
  );
}

export default MissingPage;
