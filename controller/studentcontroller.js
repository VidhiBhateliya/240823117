exports.index=(req,res)=>{
    res.send("hello mca students");
}


exports.show=(req,res)=>{
    res.send(`hello mca students\nID:${req.params.id}`);
}

exports.store = (req, res, next) => {
    // Access validated data
    const data = req.body;

    // Implement your logic to save `data` (e.g., to DB)

    res.status(201).json({ message: "Student created successfully", data });
};


// exports.update=(req,res)=>{
//     res.send(`successfully updated\nID:${req.params.id},${req.body.name},${req.body.city}`);
// }

exports.destroy=(req,res)=>{
    res.send(`successfully deleted\nID:${req.params.id}`);
}


