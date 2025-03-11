"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useEffect, useState } from "react";

const FormSchema = z.object({
  name: z.string().min(5, "Nome inválido"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, "Telfone inválido"),
  cpf: z.string().min(8, "CPF inválido"),
});

export function PromoForm() {
  const [totalCodigos, setTotalCodigos] = useState(10000);

  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setInterval(() => {
      setTotalCodigos((prev) => prev - getRandomNumber(1, 5));
    }, 2000);
  }, []);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast("test");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-[24rem]">
        <Card className="bg-white/75  backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center">Obtenha seu código</CardTitle>
            <CardDescription className="text-black text-center">
              Preencha o formulário para obter seu código promocional
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col space-y-8">
            <div className="flex justify-center items-end">
              <span className="text-7xl font-semibold text-center">
                {totalCodigos}
              </span>
              <span>disponíveis</span>
            </div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="border-1 border-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="border-1 border-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Telefone"
                      {...field}
                      className="border-1 border-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Telefone"
                      {...field}
                      className="border-1 border-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className=" w-full bg-purple-800">
              Obter Código
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
