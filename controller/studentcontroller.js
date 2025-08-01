exports.index=(req,res)=>{
    res.send("hello mca students");
}


exports.show=(req,res)=>{
    res.send(`hello mca students\nID:${req.params.id}`);
}

exports.store=(req,res)=>{
    res.send(`stored record\n:${req.body.name},${req.body.city}`);
}

exports.update=(req,res)=>{
    res.send(`successfully updated\nID:${req.params.id},${req.body.name},${req.body.city}`);
}
