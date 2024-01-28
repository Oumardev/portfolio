async function downloadapk(){
    const ADRESSE = 'https://www.oumardev.com'

    await axios.get(`${ADRESSE}/download`)

    console.log('download apk')
}