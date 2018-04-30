import multer from 'multer';
import crypto from 'crypto';


let storage=multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./ImageUploads/');
    },
    filename:function(req,file,callback){
        crypto.pseudoRandomBytes(16, function(err, raw) {
            callback(null, 'image_'+raw.toString('hex')+'.WEBP');
            });
     }
});

let fileFilter=(req,file,callback)=>{
    if(file.mimetype==='image/jpeg'){
        callback(null,true);
    }else{
        callback(null,false);
        console.log("not valid image");
    }
};

let upload=multer({
    storage:storage,
    fileFilter:fileFilter
});

let MulterController=upload.single('image');
 
 export default MulterController;

