using Google.Cloud.Datastore.V1;

namespace ConnexAi.Persistence
{
    public class DatastoreDbFactory : IDatastoreDbFactory
    {
        public DatastoreDb CreateDatastoreDb()
        {
            DatastoreDb db = DatastoreDb.Create("connexai");
            return db;
        }
    }
}