/**
 * Confirmação de Exclusão de um contato
 * @author Tomás França
 * @param idcon
 */

 function confirmar(idcon){
	 let resposta = confirm("Confirma a exclusão deste contato ?")
	 if (resposta === true){
		window.location.href = "delete?idcon=" + idcon
	 }
 }