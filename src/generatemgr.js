function generateMgr(data) {
   return  `<div class="card">
   <h3>${data.name}</h3>
   <h4>Manager</h4>
   <p>ID: ${data.id}</id>
   <p>email: ${data.email}</p>
   <p>Office number: ${data.officeNum}</p>
</div>`
}

module.exports = generateMgr;