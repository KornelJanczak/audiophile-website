namespace ConsoleApp1
{
    class Program
    {
        static private int[] pesel = new int[11];
        static private int[] waga = { 1, 3, 7, 9, 1, 3, 7, 9, 1, 3 };
        static public void Main()
        {
            for(int i = 0; i < pesel.Length; i++)
            {
                pesel[i] = int.Parse(Console.ReadLine());
           
            }

            char plec = sprawdzPłeć(pesel);
            bool ok = sprawdzPesel(pesel);

            if(plec == 'K')
            {
                Console.WriteLine("Kobieta");
            }
            else
            {
                Console.WriteLine("Mężczyzna");
            }


            if (ok)
            {
                Console.WriteLine("OK");
            }
            else
            {
                Console.WriteLine("Nie OK");
            }
        }

        static private bool sprawdzPesel(int[] pesel)
        {
            int S = 0;
            int R;
            for(int i  = 0; i < 10; i++)
            {
                S  += pesel[i] * waga[i];
            }

            int M = S % 10;

            if(M == 0)
            {
                R = 0;
            }
            else
            {
                R = 10 - M;
            }

            if (R == pesel[10])
            {
                return true;
            }
            else
            {
                return false;
            }
        }


        static private char sprawdzPłeć(int[] pesel)
        {
            if (pesel[9] % 2 == 0)
            {
                return 'K';
            }
            else
            {
                return 'M';
            }
        }
    }
}