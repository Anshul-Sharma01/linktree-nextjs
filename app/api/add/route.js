import { MongoClient } from "mongodb";


export async function POST(request){
    const body = await request.json();
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await client.connect();
    const db = client.db("urltree");
    const collection = db.collection("links");

    const handleExists = await collection.findOne({handle : body.handle});
    if(handleExists){
        return Response.json({ success : false, error : true, message : "This URL Tree already exists", result : null });
    }

    const res = await collection.insertOne(body);

    return Response.json({ success : true, error : false, message : "Your URL - Tree has been generated successfully", result : res });
}


