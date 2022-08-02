import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    let isMounted = true;
    client.fetch(query).then((data) => {
      if (data) {
        if (isMounted) {
          setAbouts(data);
        }
      }
      return () => {
        isMounted = false;
      };
    });
  }, []);

  return (
    <>
      <div className="container px-4 px-lg-5">
        <h2 className="text-center about mt-0">About Me</h2>
        <hr className="divider" />
        <div className="row gx-3 gx-lg-5">
          <div className="col-lg-4 col-md-4 text-center">
            <div className="mt-5">
              <h3 className="h4 mb-2">Name</h3>
              <p className="text-muted mb-0">Bae Seung Woo, 1nn0vat0r</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 text-center">
            <div className="mt-5">
              <h3 className="h4 mb-2">Education</h3>
              <p className="text-muted mb-0">SungKyunKwan University</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 text-center">
            <div className="mt-5">
              <h3 className="h4 mb-2">Contact</h3>
              <p className="text-muted mb-0">+82 010-3809-8122</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 text-center">
            <div className="mt-5">
              <h3 className="h4 mb-2">E-mail</h3>
              <p className="text-muted mb-0">bsw8187@naver.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 text-center">
            <div className="mt-5">
              <h3 className="h4 mb-2">My Address</h3>
              <p className="text-muted mb-0">Seoul, South Korea</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 text-center">
            <div className="mt-5">
              <h3 className="h4 mb-2">Date of Birth</h3>
              <p className="text-muted mb-0">1999.09.17</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            {about.imgUrl && (
              <img src={urlFor(about.imgUrl)} alt={about.title} />
            )}
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
