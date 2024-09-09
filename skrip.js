async function load() {
    let data = await fetch("data.json")
    data = await data.json()
   
    let component = ""

    data.forEach(teman =>{
        component += `        <div class="biodata">
            <img src="${teman.fotoselfie}" alt="Foto Teman" class="profile-pic">
            <div class="info">
                <p><strong>Nama:</strong>${teman.nama}</p>
                <p><strong>Tanggal Lahir:</strong>${teman.ttl}</p>
                <p><strong>Prodi:</strong> Informatika</p>
                <p><strong>Nomer HP:</strong>${teman.no}</p>
                <p><strong>NIM:</strong>${teman.nim}</p>
                <p><strong>Alamat:</strong>${teman.alamat}</p>
            </div>
        </div>`

    })

    document.getElementById("pembungkus").innerHTML=component

}

load()