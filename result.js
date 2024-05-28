fetch("./data.json")
.then(response => response.json())
.then(data => {
  console.log(data);
  let dataList = document.getElementById('data-list');

 
  dataList.innerHTML = '';

  
  data.forEach((item,index )=> {
      let div = document.createElement('div');
      div.classList.add('list-item')
      div.id=`items-${index}`

      div.innerHTML = `
        <div class='list-item-1'>
           <img src="${item.icon}">
            <h5>${item.category} </>
        </div>
        <p><span>${item.score}</span>/100 </p>
      
      `;
      dataList.appendChild(div);
  });
})

  