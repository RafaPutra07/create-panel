
document.getElementById("createServerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const result = document.getElementById("result");
  result.textContent = "Membuat server...";
  const accessKey = document.getElementById("accessKey").value.trim();
  const username = document.getElementById("username").value;
  const serverName = document.getElementById("serverName").value;
  const selectedPackage = document.getElementById("package").value;
  const selectedPanelType = document.getElementById("panelType").value;

  const response = await fetch("/api/create-server", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ accessKey, username, serverName, selectedPackage, selectedPanelType })
  });
  const data = await response.json();
  result.textContent = data.message || "Selesai";
});
