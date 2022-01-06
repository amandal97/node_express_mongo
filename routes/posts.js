const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// gets all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

// submits a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const data = await post.save();
        res.json(data);
    } catch(err) {
        res.json({ message: err });
    }
    
});

// get specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
    
});

// delete a specific post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
    
});

// update a specific post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: { description: "Updated second post description" } }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
    
});

module.exports = router;