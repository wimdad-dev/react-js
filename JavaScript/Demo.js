const userData = {
        obj: [
            {
                user: 'Waquar',
                age: 28
            },
            {
                user: 'Sadaf',
                age: 28
            }
        ]
    }

const App = () => {
    return userData.obj.map(function(element){
        return element.user
    })
}

var result = App()
console.log(result);

