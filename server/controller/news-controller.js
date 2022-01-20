import News from "../modal/news.js";

export const getNews = async (request,response) => {
    try{
        const size =Number(request.query.size);
        const skip = Number(request.query.page); 
       let data = await News.find({}).limit(size).skip(size * skip);
       // 5*0 = 0
       // 5*1 = 5
       response.status(200).json(data)
       //200 status ok hota ha
    }catch(error){
        response.status(500).json(error);
    }
}