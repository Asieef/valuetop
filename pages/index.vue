<template>
  <div>
    <Bigbanner />

    <Smallbanner />

    <Featured />

    <Category />
  </div>
</template>

<script>
</script>

<style>
/* #navbar-menu li {
  display: inline-block;
  padding: 0 14px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
} */

/* #navbar-menu a {
  text-decoration: none;
  letter-spacing: 2px;
  color: black;
}

#navbar-menu a:hover {
  color: #ccc;
} */

/* #navbar-logo {
  display: flex;
  justify-content: center;
  margin-top: 22px;
} */

/* #navbar-icon ul {
  list-style-type: none;
  text-align: right;
  margin: 32px 14px;
  padding: 0;
} */

#navbar-icon li {
  display: inline-block;
  padding: 0 24px;
}

#navbar-icon a {
  text-decoration: none;
}

/* #slider {
  min-height: 600px;
  background: url("/slide-case.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
} */

/* #slider-text {
  margin-left: 2rem;
}

#slider-text h2 {
  font-weight: lighter;
  font-size: 2.5rem;
}

#slider-text p {
  color: #888;
} */

/* #slider-text a {
  color: black;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  border: 1px solid black;
  font-weight: bold;
  font-size: 12px;
  padding: 1rem 1.8rem;
} */
/* 
#slider-text a:hover {
  color: white;
  background: black;
} */

/* #banner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  padding: 0 2rem;
} */

/* .bannerbox {
  padding: 0 1rem;
  transition: transform 1s;
} */
/* 
.bannerbox:hover {
  transform: scale(1.05);
} */

#banner img {
  width: 100%;
}

#featuredtext {
  text-align: center;
}

.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 0 2rem;
}

.gallery h3 {
  padding-top: 2rem;
  padding-left: 1rem;
  font-weight: lighter;
  font-size: 22px;
}

.gallery p {
  padding-left: 1rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
}

#gallery-left {
  min-height: 500px;
  background-image: url("/casing-big-banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#gallery-right {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
}

#gallery-right-up {
  background-image: url("/webcam-big-banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#gallery-right-down {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

#imgone {
  background-image: url("/psu-big-banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#imgtwo {
  background-image: url("/casing-big-banner-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#featured {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 4rem 2rem;
}

#featuredtext {
  padding: 2rem 2rem;
}

#featuredtext h3 {
  text-align: center;
  border-bottom: 1px solid #888;
  line-height: 0.1em;
  margin: 10px 0 20px;
  text-transform: uppercase;
}

h3 span {
  background: #fff;
  padding: 0 10px;
}

#featured a {
  text-decoration: none;
}

.pcard:hover {
  border: 1px solid #eee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.pcard p {
  color: #888;
  padding: 0 2rem;
}

#footer {
  background-color: #222;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 60px;
  padding: 2.4rem 0;
}

#footer ul {
  list-style-type: none;
  text-align: left;
  padding: 0;
}

#footer li {
  line-height: 36px;
}

#footer a {
  text-decoration: none;
  color: #888;
  font-size: 14px;
}

#footer a:hover {
  text-decoration: none;
  color: white;
  font-size: 14px;
}

#footer h4 {
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

#footer p {
  color: #888;
}

#flogo {
  text-align: center;
}

#newsletter input {
  padding: 14px;
}

#newsletter button {
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-size: 12px;
  font-weight: 600;
  padding: 16px;
  color: white;
  background-color: black;
}

#copyright {
  border-top: 1px solid #888;
  background-color: #222;
  text-align: center;
  padding: 2rem;
  font-size: 14px;
}
#copyright p {
  margin: 0;
  color: #888;
}

.spin-container {
  position: absolute;
  top: 20%;
  z-index: 999;
  left: 50%;
}
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #ff4850;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}

@media (max-width: 768px) {
  .hidemobile {
    display: none;
  }

  #navbar {
    grid-template-columns: 1fr;
  }

  #navbar-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    order: 3;
  }

  #navbar-logo {
    order: 2;
  }

  #navbar-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    order: 1;
  }

  #slider {
    display: none;
  }

  #banner {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  .gallery {
    grid-template-columns: 1fr;
  }

  .gallery h3 {
    font-size: 18px;
  }

  #gallery-right-up {
    background-position: center;
  }

  #imgone {
    min-height: 180px;
  }
  #imgone h3 {
    display: none;
  }

  #imgtwo h3 {
    display: none;
  }

  #featured {
    grid-template-columns: 1fr;
    padding: 0 6rem;
  }

  #footer {
    grid-template-columns: 1fr;
    text-align: center;
    grid-gap: 10px;
  }

  #footer ul {
    text-align: center;
  }

  #footer li {
    line-height: 26px;
  }
}

@media (min-width: 768px) {
  .hidedesktop {
    display: none;
  }
}
</style>





