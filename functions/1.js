       function addCPF(){
            var newData = app.data.map((i) => {
                return {
                    "email": i.email,
                    "status": i.status,
                    "cpf": "370.176.868-45",
                    "testinho" : true
                }
            })

            return newData
        }

        modules.exports = addCPF()
