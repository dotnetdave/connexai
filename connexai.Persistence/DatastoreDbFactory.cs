using Google.Cloud.Datastore.V1;
using System;
using System.Collections.Generic;
using System.Text;

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
        