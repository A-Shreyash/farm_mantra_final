
import java.util.*;

public class Test{


    public static int createMelodyString(String S) {

        int len = S.length();

        if(S.substring(0 , len/2).equals(S.substring(len/2 , len))){
            return 0;
        }
        char[] chars = S.toCharArray();
        int n = chars.length;

        int[] count = new int[128]; 
        for (char c : chars) {
            count[c]++;
        }

        for (int i = 0; i < 128; i++) {
            if (count[i] % 2 != 0) {
                return -1; // 
            }
        }
      


        Arrays.sort(chars);
        int cost = 0;
        for (int i = 0; i < (n/2)-1; i++) {
            int dist = i + 1;
            cost +=  ((int)chars[i] + (int)chars[n - 1 - i]) * dist;


        }

        return cost;
    }

    public static void main(String[] args) {
        String S = "abab";
        int minCost = createMelodyString(S);
        if (minCost != -1) {
            System.out.println("Minimum total cost to create the Melody String: " + minCost);
        } else {
            System.out.println("The sequence cannot be rearranged into a Melody String.");
        }
    }
    }