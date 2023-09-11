import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "secure",
    loadChildren: () =>
      import("./modules/secure/secure.module").then((mod) => mod.SecureModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./modules/content/content.module").then(
        (mod) => mod.ContentModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
