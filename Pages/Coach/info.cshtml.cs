using Microsoft.AspNetCore.Mvc;

using Microsoft.AspNetCore.Mvc.RazorPages;

namespace gym_0._2.Pages.Coach
{
    public class InfoModel : PageModel
    {
        public Entrenador Coach { get; private set; } = new Entrenador();

        public IActionResult OnGet(string nombre)
        {
            var lista = new List<Entrenador>
    {
        new Entrenador { Nombre = "ronnie-coleman", Especialidad = "Bodybuilding", Experiencia = 12, Descripcion = "8 veces Mr. Olympia.", Latitud = 32.7767, Longitud = -96.7970},
        new Entrenador { Nombre = "mike-mentzer", Especialidad = "Hipertrofia", Experiencia = 10, Descripcion = "Creador del heavy duty", Latitud = 34.0522, Longitud = -118.2437  }
    };

            var entrenadorEncontrado = lista.FirstOrDefault(c => c.Nombre.Equals(nombre, StringComparison.OrdinalIgnoreCase));

            if (entrenadorEncontrado == null)
                return RedirectToPage("/Index"); // O usar NotFound();

            Coach = entrenadorEncontrado;

            return Page();
        }

        public class Entrenador
        {
            public string Nombre { get; set; }
            public string Especialidad { get; set; }
            public int Experiencia { get; set; }
            public string Descripcion { get; set; }
            public double Latitud { get; set; }
            public double Longitud { get; set; }
        }

    }
}