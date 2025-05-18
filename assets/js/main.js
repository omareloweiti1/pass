

// // <!-- Start mobileMenu -->
 
//   //  open menu and cloos and go to link and cloos menu
//   function Menu() {
//     const mobileMenu = document.getElementById("mobileMenu");
//     mobileMenu.classList.toggle("active");
//   }

//   document.querySelectorAll('.mobile-menu a').forEach(link => {
//     link.addEventListener('click', () => {
//       document.getElementById("mobileMenu").classList.remove("active");
//     });
//   });
 
// // <!-- End mobileMenu -->

// // <!-- Start International shipping services -->
 
//   const toggleBtn = document.getElementById("toggle-btn");
//   const toggleLess = document.getElementById("toggle-less");
//   const moreText = document.getElementById("more-text");
//   const dots = document.getElementById("dots");
//   const summary = document.getElementById("summary");

//   toggleBtn.addEventListener("click", () => {
//     moreText.style.display = "block";
//     dots.style.display = "none";
//     toggleBtn.style.display = "none";
//   });

//   toggleLess.addEventListener("click", () => {
//     moreText.style.display = "none";
//     dots.style.display = "inline";
//     toggleBtn.style.display = "inline";
//     summary.scrollIntoView({ behavior: 'smooth' });
//   });
 
// // <!-- End International shipping services -->

// // <!-- Start filter services -->
 
//   const filterButtons = document.querySelectorAll(".filter-btn");
//   const serviceSections = document.querySelectorAll(".services-section");

//   filterButtons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       filterButtons.forEach((b) => b.classList.remove("active"));
//       btn.classList.add("active");

//       const targetId = btn.getAttribute("data-target");
//       serviceSections.forEach((section) => {
//         section.style.display = section.id === targetId ? "block" : "none";
//       });
//     });
//   });
 
// // <!-- End filter services -->


// // <!--  Start filter solutions -->
 
//   const filterButtonses = document.querySelectorAll(".filter-btn");
//   const serviceSectionses = document.querySelectorAll(".services-section");
//   const solutionSections = {
//     'supply-chain': 'supply-solutions',
//     'customs-clearance': 'customs-solutions',
//     'distribution-management': 'distribution-solutions'
//   };

//   filterButtonses.forEach(btn => {
//     btn.addEventListener("click", () => {
//       const targetId = btn.getAttribute("data-target");
//       serviceSectionses.forEach(section => {
//         section.style.display = section.id === targetId ? "block" : "none";
//       });

//       const allSolutions = document.querySelectorAll(".solutions-section");
//       allSolutions.forEach(sol => sol.style.display = "none");

//       if (solutionSections[targetId]) {
//         const solutionId = solutionSections[targetId];
//         const targetSol = document.getElementById(solutionId);
//         if (targetSol) targetSol.style.display = "block";
//       }
//     });
//   });
 
// // <!-- End filter solutions -->


// // <!-- Start Popup -->
 
//   const form = document.querySelector('.service-form');
//   const popup = document.getElementById('successPopup');
//   const closeBtn = document.getElementById('closePopup');
//   form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     popup.style.display = 'flex';
//     form.reset();
//   });
//   closeBtn.addEventListener('click', () => {
//     popup.style.display = 'none';
//   });
 
// // <!-- End Popup -->


 
//   const airplane = document.querySelector('.airplane');
//   airplane.addEventListener('animationend', () => {
//     airplane.style.animation = 'none';
//     airplane.style.offsetDistance = '0%';
//     airplane.style.opacity = '1';
//   });
 