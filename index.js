/*
  Produced 2019-2021
  By https://amattu.com/links/github
  Copy Alec M.
  License GNU Affero General Public License v3.0
*/
document.querySelectorAll(".menu-button").forEach((button) => {
  button.onclick = (evt) => {
    // Remove other active buttons
    document.querySelectorAll(".menu-button.active").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Activate button
    button.classList.add("active");
  };
});
