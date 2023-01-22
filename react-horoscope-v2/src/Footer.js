import React from "react";

export default function Footer() {
  return (
    <div className="col-12 text-center">
      <hr />
      <footer>
        <div>
          The Astrology results were bought to you via{" "}
          <i className="fa-brands fa-creative-commons"></i>{" "}
          <a
            className="footer-SO-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sameerkumar18/aztro"
          >
            Aztro API
          </a>{" "}
          (by Sameer Kumar and other contributors){" "}
          <a
            className="footer-SO-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sameerkumar18/aztro/blob/master/LICENSE"
          >
            under Apache License 2.0{" "}
          </a>
          .
        </div>
        <div>
          The Zodiac icons were{" "}
          <a
            className="footer-SO-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.flaticon.com/packs/zodiac-2"
          >
            created by Roundicons - Flaticon
          </a>
          {"."}
        </div>
        <div>
          This Horoscope App is built using React
          <i className="fa-brands fa-react"></i>, hosted with{" "}
          <a
            className="footlink"
            target="_blank"
            rel="noreferrer nopener"
            href="https://www.netlify.com"
          >
            Netlify
          </a>
          , and{" "}
          <strong>
            <a
              className="footlink"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/sylviaintech/"
            >
              open-source-coded
            </a>{" "}
          </strong>
          by SylviaInTech
        </div>
      </footer>
    </div>
  );
}
