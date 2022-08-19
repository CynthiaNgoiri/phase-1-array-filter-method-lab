function findMatching(name, string) {return name.filter((name) => {
        return name.toLowerCase() === string.toLowerCase();
    });
}

function fuzzyMatch(name, string) {return name.filter((name) =>{
        return name.slice(0, string.length) === string;
    })
}

function matchName(object, string) {return object.filter((object) => {
    return object.name === string;
    })
}