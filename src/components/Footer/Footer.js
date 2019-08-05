import React from 'react';
export function Footer(){
        return(
            <footer style={{textAlign: "center", marginBottom:"1em"}}> 
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        )
}