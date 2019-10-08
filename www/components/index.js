$(document).on("click","#listar",function(){
  $(location).attr("href","listar.html");
});
$(document).on("click","#cadastrar",function(){
var parametros={
  "sabor":$("#sabor").val(),
  "valor":$("#valor").val()
};

$.ajax({
  type:"post", //Como vou enviar os dados ao servidor
  url:"https://pizzaron.000webhostapp.com/cadastra.php", //Para onde vai ser direcionado
  data:parametros, //o que eu vou enviar
  //Caso esteja tudo certo executa esse codigo
  success: function(data){
      navigator.notification.alert(data);
      $("sabor").val("");
      $("valor").val("");
  },
  //Caso algo esteja errado executa esse codigo
  error: function(data){
    navigator.notification.alert("Erro ao cadastrar");
  }
})
});

function carregaLista(){
$.ajax({
  type:"post", //Como vou enviar os dados ao servidor
  url:"https://pizzaron.000webhostapp.com/listar.php", //Para onde vai ser direcionado
  dataType:"json", //o que eu vou enviar
  //Caso esteja tudo certo executa esse codigo
  success: function(data){
    var itemLista = "";
    $.each(data.pizzas,function(i,dados){
      itemLista += "<option value="+dados.codigo+">"+dados.sabor+"</option>"
    });
     $("#lista").html(itemLista);
  },
  //Caso algo esteja errado executa esse codigo
  error: function(data){
    navigator.notification.alert("Erro ao cadastrar");
  }
})


}
