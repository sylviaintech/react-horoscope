import React from "react";

export default function Footer() {
  return (
    <div className="col-12 text-center">
      <footer>
        <hr />
        <div className="my-2">
          The Astrology results were bought to you via{" "}
          <i className="fa-brands fa-creative-commons"></i>{" "}
          <a
            className="footlink footer-SO-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sameerkumar18/aztro"
            title="Aztro Project on Github"
          >
            Aztro API
          </a>{" "}
          (by Sameer Kumar and other contributors){" "}
          <a
            className="footlink footer-SO-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sameerkumar18/aztro/blob/master/LICENSE"
            title="License"
          >
            under Apache License 2.0
          </a>
          .
        </div>
        <div className="my-2">
          The Zodiac icons were{" "}
          <a
            className="footlink footer-SO-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.flaticon.com/packs/zodiac-2"
            title="Roundicons on flaticon.com"
          >
            created by Roundicons - Flaticon
          </a>
          {"."}
        </div>
        <div className="my-1 pb-5">
          This Horoscope App is built using React
          <i className="fa-brands fa-react"></i>, hosted with{" "}
          <a
            className="footlink"
            target="_blank"
            rel="noreferrer nopener"
            href="https://www.netlify.com"
            title="Netlify"
          >
            Netlify
          </a>
          , and{" "}
          <a
            className="footlink"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/sylviaintech/"
            title="Github"
          >
            coded by SylviaInTech
          </a>
          {"."}
        </div>
      </footer>
    </div>
  );
}
