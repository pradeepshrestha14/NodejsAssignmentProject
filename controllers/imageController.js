module.exports.getUploadResult=(req,res,next)=>{
            if (!req.file) {
            return res.json({
              upload_success: false
            });
        
          } else {
            let filePath = req.file.path;
            return res.json({
                upload_success: true,
                file_path:filePath
            })
          }
    }
  