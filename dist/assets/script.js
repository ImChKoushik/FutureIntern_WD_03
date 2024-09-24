"use strict";

// selecting elements
const tab1 = document.querySelector(".tab-1");
const tab2 = document.querySelector(".tab-2");
const tab3 = document.querySelector(".tab-3");
const skills = document.getElementById("skills");
const experience = document.getElementById("experience");
const education = document.getElementById("education");

// adding event listener
tab1.addEventListener("click", function () {
  skills.classList.remove("hidden");
  if (!experience.classList.contains("hidden"))
    experience.classList.add("hidden");
  if (!education.classList.contains("hidden"))
    education.classList.add("hidden");
});

tab2.addEventListener("click", function () {
  experience.classList.remove("hidden");
  if (!skills.classList.contains("hidden")) skills.classList.add("hidden");
  if (!education.classList.contains("hidden"))
    education.classList.add("hidden");
});

tab3.addEventListener("click", function () {
  education.classList.remove("hidden");
  if (!skills.classList.contains("hidden")) skills.classList.add("hidden");
  if (!experience.classList.contains("hidden"))
    experience.classList.add("hidden");
});
