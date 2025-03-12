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
import Image from "next/image";
import { Checkbox } from "./ui/checkbox";

const FormSchema = z.object({
  name: z.string().min(5, "Nome inválido"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, "Telfone inválido"),
  confirm: z.boolean(),
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
      confirm: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast("test");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-[24rem] ">
        <Card className="bg-white/20   sm:backdrop-blur-[5px]">
          <CardHeader>
            <Image
              src="/imgs/redbullcom-logo_double-with-text.svg"
              width={300}
              height={300}
              alt="Redbull Logo"
              className="mb-5"
            />
            <CardTitle className="text-center text-white  ">
              Obtenha seu código
            </CardTitle>
            <CardDescription className="text-white  text-center">
              Preencha o formulário para obter seu código promocional
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col space-y-8 text-white ">
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
                <FormItem className="text-white ">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nome"
                      {...field}
                      className="bg-white/50 sm:bg-transparent border-1 border-white  placeholder:text-white "
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
                <FormItem className="text-white ">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="bg-white/50 sm:bg-transparent border-1 border-white  placeholder:text-white "
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
                <FormItem className="text-white ">
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Telefone"
                      {...field}
                      className="bg-white/50 sm:bg-transparent border-1 border-white  placeholder:text-white  "
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
                <FormItem className="text-white ">
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" {...field} />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Concorda em passar suas informações?
                      </label>
                    </div>
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
