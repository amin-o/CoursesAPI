#!/usr/bin/env node

const mongoose = require('mongoose');

courseSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 15,
        unique: true,
        required: true,
        index:true
    },
    description: {
        type: String,
        minlength: 10,
        maxlength: 150
    },
    image: {
        //max size: 3mb
        type: String,
        default: "../public/images/defaultCourseImage.png"
    },
    price: {
        required: true,
        min: 1,
        max: 10000,
        type: Number
    },
    quantity: {
        type: Number,
        default: 0,
        max: 50
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Teacher" //use Teacher model during population
    }
}, { timestamps: true })

module.exports = mongoose.model('Course', courseSchema);