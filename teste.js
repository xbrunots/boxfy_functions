    async  function testando() {
    var t = '18055271'; 
    var response = await fetch('https://viacep.com.br/ws/'+t+'/json/'); 
    var json = await response.text();  
    console.log('json');
    console.log(json);
    return json ;