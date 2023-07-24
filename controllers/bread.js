const router = require('express').Router()
const Bread = require('../models/bread')
const Baker = require('../models/baker')

//Get all bread and bakers
router.get('/',async (req,res) => {
    const breads = await Bread.find()
    const bakers = await Baker.find()
    res.render('index', { breads, bakers })
})

//render new page
router.get('/new',async (req,res) => {
    const bakers = await Baker.find()
    res.render('new', { bakers } )
})

//gets bread by id
router.get('/:id',async (req,res) => {
    const { id } = req.params
    const bread = await Bread.findById(id).populate('baker')
    res.render('show',{
        bread
    })
})

//GET edit page
router.get('/:id/edit',async (req, res) =>{
    const { id } = req.params
    const bread = await Bread.findById(id)
    const bakers = await Baker.find()
    res.render('edit', {
        bread,
        bakers
    })
})


router.post('/',async (req, res) => {
    //it will be using a checkbox item from a form, and checking if it is "on"
    if (req.body.hasGluten === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }

    if (!req.body.image) req.body.image=undefined

    await Bread.create(req.body)
    res.status(303).redirect('/breads')
})

//PUT update a bread by id
router.put('/:id',async (req, res) => {
    const { id } = req.params
    if (req.body.hasGluten === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }

    if (!req.body.image) req.body.image='https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'

    await Bread.findByIdAndUpdate(id, req.body)
    res.status(303).redirect(`/breads/${id}`)
})



//delete bread by id
router.delete('/:id',async (req, res) =>{
    const { id }  = req.params
    await Bread.findByIdAndDelete(id)
    res.status(303).redirect('/breads')
})

module.exports = router