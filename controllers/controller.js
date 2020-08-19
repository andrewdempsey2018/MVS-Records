const index = (req, res) => {
    res.render('index');
}

const view = (req, res) => {
    res.render('view');
}

const add = (req, res) => {
    res.render('iadd');
}

module.exports = {
    index,
    view,
    add,
}