package cultoftheunicorn.marvel;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

public class SecondActivity extends AppCompatActivity {
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.second_activity);
        Bundle firstData = getIntent().getExtras();

        if(firstData==null)
        {
            return;
        }
        String text = firstData.getString("textView");






    }
}