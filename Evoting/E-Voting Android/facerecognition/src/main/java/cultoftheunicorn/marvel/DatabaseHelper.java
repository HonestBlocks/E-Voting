package cultoftheunicorn.marvel;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.sql.Timestamp;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;

public class DatabaseHelper extends SQLiteOpenHelper {

    Date date = new Date();


    public static final String Database_Name = "attendance.db";
    public static final String Table_Name = "ATDAttendance";
    public static final String Table_Name1 = "Attendance";
    public static final String Col_1 = "ID";
    public static final String Col_2 = "Name";
    public static final String Col_3 = "Date";

private static final String q1 = "create Table "+ Table_Name1 + "(" + Col_1 +" integer Primary Key autoIncrement," + Col_2 + " primary key text," + Col_3 + " text" + ")";

    public DatabaseHelper(Context context) {
        super(context,Database_Name, null, 1);
        SQLiteDatabase db = this.getWritableDatabase();

       // db.execSQL(q1);

    }

    @Override
    public void onCreate(SQLiteDatabase db) {

        db.execSQL(q1);

    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int i, int i1) {
        db.execSQL("Drop Table if Exists " + Table_Name1);
        onCreate(db);



    }
    public boolean insertData(String a,String dateString)
    {
        SQLiteDatabase db = this.getWritableDatabase();



//Timestamp ts = new Timestamp(time);

        //   Calendar calendar =  Calendar.getInstance();
        // String currentDate = DateFormat.getDateInstance(DateFormat.FULL).format(calendar.getTime());


        // SQLiteDatabase db = this.getWritableDatabase();
        ContentValues contentValues = new ContentValues();

        contentValues.put(Col_2,a);
        contentValues.put(Col_3,dateString);
        long result =  db.insert(Table_Name1, null, contentValues);

        if(result==-1)
            return false;
        else
            return true;


    }
    public Cursor getAllData()
    {
        SQLiteDatabase db = this.getWritableDatabase();
        Cursor res = db.rawQuery("Select * from "+Table_Name1,null);
        return res;
    }










}
