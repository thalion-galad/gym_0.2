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
        new Entrenador { Nombre = "ronnie-coleman", Especialidad = "Bodybuilding", Experiencia = 12, Descripcion = "8 veces Mr. Olympia." },
        new Entrenador { Nombre = "jay-cutler", Especialidad = "Hipertrofia", Experiencia = 10, Descripcion = "4 veces Mr. Olympia." }
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
        }

    }
}