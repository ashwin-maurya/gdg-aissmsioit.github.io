import React from "react";
import { useParams } from "react-router-dom";

import workshops from "./workshops";

import "./Eventdetails.css";

import { Helmet } from "react-helmet";

const Workshopdetails = () => {
  const { id } = useParams();
  const workshop = workshops[workshops.length - id];
  const points = workshop.about.split(". ");

  const event_date = new Date(workshop.date);
  const current_date = new Date();

  const upcoming = event_date.getTime() + 18060000 > current_date.getTime();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WORKSHOP DETAILS GDSC - IOIT</title>
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="gdsc workshop details, gdsc aissms workshop details, gdsc aissms ioit workshop details, dsc, dsc aissms workshop details, dsc aissms ioit workshop details, gdsc ioit workshop details, dsc ioit workshop details, ioit dsc workshop details, aissms dsc workshop details, aissms ioit dsc workshop details, aissms ioit gdsc workshop details, gdsc-aissms-ioit workshop details, gdsc-ioit workshop details, dsc-aissms-ioit workshop details, dsc-ioit workshop details"
        />
      </Helmet>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-anchor=".example-selector"
        data-aos-anchor-placement="top-center"
        className="row workshops"
      >
        <div id="Worshops" className="span_headings">
          <span>Workshop Details</span>
          <span role="img" aria-label=""></span>
        </div>
      </div>
      <div className="events-container">
        <div className="events-card">
          <div
            className={upcoming ? "events-header up" : "events-header"}
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <img
              src={workshop.imageSrc}
              alt="Workshops_Image"
              className="events-image"
            />
          </div>
          <div className="events-main">
            <div
              className="events-body"
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-anchor=".example-selector"
              data-aos-anchor-placement="top-center"
            >
              <span>
                <b> {workshop.name}</b>
              </span>
              <span>
                <b>Date :</b> {workshop.date}
              </span>
              <span>
                <b>Day :</b> {workshop.day}
              </span>
              <span>
                <b>Speaker :</b> {workshop.speaker}
              </span>
              <div>
                <b>Description :</b>{" "}
                {points.map((point) => (
                  <li>{point}</li>
                ))}
              </div>
            </div>
            {upcoming ? (
              <a target="_blank" rel="noreferrer" href={workshop.eventLink}>
                <button className="rsvp-btn">Rsvp</button>
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Workshopdetails;
