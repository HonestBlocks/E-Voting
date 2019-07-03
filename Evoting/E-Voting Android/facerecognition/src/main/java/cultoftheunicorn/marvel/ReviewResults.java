package cultoftheunicorn.marvel;

import android.database.Cursor;
import android.os.AsyncTask;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
//import android.support.v7.widget.DividerItemDecoration;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

// uncomment when you enable firebase
//import com.google.firebase.database.DatabaseReference;
//import com.google.firebase.database.FirebaseDatabase;

//import org.opencv.cultoftheunicorn.marvel.R;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.net.ssl.HttpsURLConnection;

class Attendees {

    public String names;
    public String date;

    public Attendees() {
        // Default constructor required for calls to DataSnapshot.getValue(User.class)
    }

    public Attendees(String names, String date) {
        this.names  = names;
        this.date = date;
    }

}

public class ReviewResults extends AppCompatActivity implements ReviewListAdapter.ClickListener {

  //ButtonChoice bc;
    DatabaseHelper myDB;
    Recognize bc;

    public int value2 ;
    public List<String> commitList = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_review_results);

        myDB = new DatabaseHelper(this);

        value2 = getIntent().getExtras().getInt("Value");






        RecyclerView recyclerView = (RecyclerView) findViewById(R.id.recyclerView);

        Button commitButton = (Button) findViewById(R.id.button);
        commitButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                commit();
            }
        });

        Toolbar toolbar = (Toolbar) findViewById(R.id.app_bar);
        setSupportActionBar(toolbar);

        if(getSupportActionBar() != null) {
            getSupportActionBar().setTitle("Review and Mark");
        }

        List<String> reviewList = Arrays.asList(getIntent().getStringArrayExtra("list"));

        ReviewListAdapter reviewListAdapter = new ReviewListAdapter(this, reviewList);
        reviewListAdapter.setClickListener(this);
        recyclerView.setAdapter(reviewListAdapter);

        //Setting LayoutManager
        LinearLayoutManager linearLayoutManager = new LinearLayoutManager(this);
        linearLayoutManager.setOrientation(LinearLayoutManager.VERTICAL);
        recyclerView.setLayoutManager(linearLayoutManager);

        /*//For adding dividers in the list
        DividerItemDecoration dividerItemDecoration = new DividerItemDecoration(recyclerView.getContext(), linearLayoutManager.getOrientation());
        dividerItemDecoration.setDrawable(ContextCompat.getDrawable(this, R.drawable.line_divider));
        recyclerView.addItemDecoration(dividerItemDecoration);*/


    }

    @Override
    public void onItemClick(String name) {


        if(commitList.contains(name))
            commitList.remove(name);
        else {
            commitList.add(name);

        }
    }

    public void commit() {

        if(commitList.size() != 0) {
//            Enable firebase and then uncomment the following lines

//            FirebaseDatabase database = FirebaseDatabase.getInstance();
  //          DatabaseReference myRef = database.getReference("attendence");

  //          convert to a comma separated string
//            this has to be the worst way to push data to a db
    //      StringBuilder sb = new StringBuilder();
      //      for (String s : commitList) {
          //      sb.append(s);
        //        sb.append(",");
    //        }

            long date = System.currentTimeMillis();
            SimpleDateFormat sdf = new SimpleDateFormat("MMM dd yyyy hh-mm-ss a");
            String dateString = sdf.format(date);

            new SendRequest().execute();


//            finish();




            //          System.out.println(sb.toString());

        }
        else {
            Toast.makeText(getApplicationContext(), "Please select at least one student", Toast.LENGTH_SHORT).show();
        }
    }
    public void showMessage(String title,String Message)
    {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setCancelable(true);
        builder.setTitle(title);
        builder.setMessage(Message);
        builder.show();
    }


    public class SendRequest extends AsyncTask<String, Void, String> {

ReviewResults rr;
//ButtonChoice bc;
        protected void onPreExecute(){}

        protected String doInBackground(String... arg0) {

            try{

                URL url;
                if(value2==1)
                 url = new URL("https://script.google.com/macros/s/AKfycbw4aBDce4dCKPvj1vsATB6S-V2hO-1Mv7f02E8MOcVs5u2B_BE/exec");
                else
                    url = new URL("https://script.google.com/macros/s/AKfycbzDRWmhIDGH2qdP4--OCFspKvBzlPLYgiZNkg-i7JMtJyBgGIY/exec");


                // https://script.google.com/macros/s/AKfycbyuAu6jWNYMiWt9X5yp63-hypxQPlg5JS8NimN6GEGmdKZcIFh0/exec
                JSONObject postDataParams = new JSONObject();

                //int i;
                //for(i=1;i<=70;i++)


                //    String usn = Integer.toString(i);

                String id= "12j42sHxn_3nV_1Bg7iLwiKQDS7ta2SbAJnulTQ2YQ84";

                long date = System.currentTimeMillis();
                SimpleDateFormat sdf = new SimpleDateFormat("MMM dd yyyy");
                String dateString = sdf.format(date);

                long date1 = System.currentTimeMillis();
                SimpleDateFormat sdf1 = new SimpleDateFormat("HH:mm");
                String dateString1 = sdf1.format(date1);


                postDataParams.put("date",dateString);
                postDataParams.put("inti",dateString1);

                postDataParams.put("id",id);
                postDataParams.put("name",commitList.get(0));


                Log.e("params",postDataParams.toString());

                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setReadTimeout(15000 /* milliseconds */);
                conn.setConnectTimeout(15000 /* milliseconds */);
                conn.setRequestMethod("POST");
                conn.setDoInput(true);
                conn.setDoOutput(true);

                OutputStream os = conn.getOutputStream();
                BufferedWriter writer = new BufferedWriter(
                        new OutputStreamWriter(os, "UTF-8"));
                writer.write(getPostDataString(postDataParams));

                writer.flush();
                writer.close();
                os.close();

                int responseCode=conn.getResponseCode();

                if (responseCode == HttpsURLConnection.HTTP_OK) {

                    BufferedReader in=new BufferedReader(new InputStreamReader(conn.getInputStream()));
                    StringBuffer sb = new StringBuffer("");
                    String line="";

                    while((line = in.readLine()) != null) {

                        sb.append(line);
                        break;
                    }

                    in.close();
                    return sb.toString();

                }
                else {
                    return new String("false : "+responseCode);
                }
            }
            catch(Exception e){
                return new String("Exception: " + e.getMessage());
            }
        }

        @Override
        protected void onPostExecute(String result) {
            Toast.makeText(getApplicationContext(), result,
                    Toast.LENGTH_LONG).show();

        }
    }

    public String getPostDataString(JSONObject params) throws Exception {

        StringBuilder result = new StringBuilder();
        boolean first = true;

        Iterator<String> itr = params.keys();

        while(itr.hasNext()){

            String key= itr.next();
            Object value = params.get(key);

            if (first)
                first = false;
            else
                result.append("&");

            result.append(URLEncoder.encode(key, "UTF-8"));
            result.append("=");
            result.append(URLEncoder.encode(value.toString(), "UTF-8"));

        }
        return result.toString();
    }
}

