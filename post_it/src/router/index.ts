import { createRouter, createWebHistory } from "vue-router";
import NotesView from "../views/NotesView.vue";
import CardView from "../views/CardView.vue";
import AddCardView from "../views/AddCardView.vue";
import ModifyCardViewVue from "@/views/ModifyCardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "notes",
      component: NotesView
    },
    {
      path: "/Card/:id",
      name: "Card",
      component: CardView
    },
    {
      path: "/AddCard",
      name: "AddCard",
      component: AddCardView
    },
    {
      path:"/ModifyCard/:id",
      name:"ModifyCard",
      component: ModifyCardViewVue
    },
  ],
});

export default router;
