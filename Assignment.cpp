#include <bits/stdc++.h>
using namespace std;

int gcd(int a, int b)
{

    int result = min(a, b);
    while (result > 0)
    {
        if (a % result == 0 && b % result == 0)
        {
            break;
        }
        result--;
    }

    return result;
}

int main()

{
    int t;
    cin >> t;
    while (t--)
    {
        long long int n,k;
        cin >> n >> k;
        vector<long long >v(n),prev(n+1,0);
        for (int i = 0; i < n; i++)
        {
            cin >> v[i];
        }
        sort(v.begin(),v.end());
        for(int i=0;i<n;i++){
            prev[i+1]=prev[i]+v[i];
        } 

        long long int m=0;
        for(int i=0;i<=k;i++){
            m=max(m,prev[n-i]-prev[2*(k-i)]);
        }
        cout << m << endl;
        

    }
}
