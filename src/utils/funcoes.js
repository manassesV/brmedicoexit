


export default class FuncoesJS{
    

        idade(datasnascimento) {

          var ds = datasnascimento.split("-");
          ano_aniversario = ds[2];
          mes_aniversario = ds[1];
          dia_aniversario = ds[0];

          var d = new Date,
              ano_atual = d.getFullYear(),
              mes_atual = d.getMonth() + 1,
              dia_atual = d.getDate(),
              ano_aniversario = +ano_aniversario,
              mes_aniversario = +mes_aniversario,
              dia_aniversario = +dia_aniversario,
              quantos_anos = ano_atual - ano_aniversario;         
          if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
              quantos_anos--;
             
          }
        
          return quantos_anos < 0 ? 0 : quantos_anos; 
        }
        addDate(numberOfDays, data){
            var ds = data.split('-');

            var date = new Date(ds[2], ds[1], ds[0]);

           
            date.setDate(date.getDate() + numberOfDays);
            return date;
        }


        tempUltPapa(){
                var ds = datasnascimento.split("-");
                ano_aniversario = ds[2];
                mes_aniversario = ds[1];
                dia_aniversario = ds[0];
      
                var d = new Date,
                    ano_atual = d.getFullYear(),
                    mes_atual = d.getMonth() + 1,
                    dia_atual = d.getDate(),
                    ano_aniversario = +ano_aniversario,
                    mes_aniversario = +mes_aniversario,
                    dia_aniversario = +dia_aniversario,
                    quantos_anos = ano_atual - ano_aniversario;         
                if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
                    quantos_anos--;
                   
                }
              
                return quantos_anos < 0 ? 0 : quantos_anos; 
              }
              addDate(numberOfDays, data){
                  var ds = data.split('-');
      
                  var date = new Date(ds[2], ds[1], ds[0]);
      
                 
                  date.setDate(date.getDate() + numberOfDays);
                  return date;
              }
    
}
