const inviteDiv = document.querySelector("#invite-btn")
const inviteButton = document.querySelector("#invite-btn button");

inviteDiv.addEventListener("mouseover", function() {
    inviteButton.innerHTML = `
        <i class="bi bi-arrow-right"></i>
        <span id="span-in">INVITE NOW</span>`
});


inviteDiv.addEventListener("mouseout", function() {
    inviteButton.innerHTML = `
        <i class="bi bi-chevron-right"></i>`
});
